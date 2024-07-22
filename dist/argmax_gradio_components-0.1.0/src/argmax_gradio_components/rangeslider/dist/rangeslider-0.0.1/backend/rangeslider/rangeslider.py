"""gr.Slider() component."""

from __future__ import annotations

import math
import random
from typing import Any, Callable

from gradio_client.documentation import document

from gradio.components.base import FormComponent
from gradio.events import Events


class RangeSlider(FormComponent):
    """
    Creates a range slider that ranges from {minimum} to {maximum} with a step size of {step}.
    """

    EVENTS = [Events.change, Events.input, Events.release]

    def __init__(
        self,
        minimum: float | None = 0,
        maximum: float | None = 100,
        value: Tuple[float, float] | Callable | None = None,
        *,
        step: float | None = None,
        label: str | None = "Range Slider",
        info: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = None,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        key: int | str | None = None,
        randomize: bool = False,
    ):
        """
        Parameters:
            minimum: minimum value for slider.
            maximum: maximum value for slider.
            value: default value as a tuple (min, max). If callable, the function will be called whenever the app loads to set the initial value of the component. Ignored if randomized=True.
            step: increment between slider values.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            info: additional component description.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, slider will be adjustable; if False, adjusting will be disabled. If not provided, this is inferred based on whether the component is used as an input or output.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            key: if assigned, will be used to assume identity across a re-render. Components that have the same key across a re-render will have their value preserved.
            randomize: If True, the value of the slider when the app loads is taken uniformly at random from the range given by the minimum and maximum.
        """
        self.minimum = minimum
        self.maximum = maximum
        if step is None:
            difference = maximum - minimum
            power = math.floor(math.log10(difference) - 2)
            self.step = 10**power
        else:
            self.step = step
        if value is None:
            value = (minimum, maximum)
        elif randomize:
            value = self.get_random_value
        super().__init__(
            label=label,
            info=info,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            key=key,
            value=value,
        )

    def api_info(self) -> dict[str, Any]:
        return {
            "type": "number",
            "descript ion": f"tuple of two numeric values between {self.minimum} and {self.maximum}",
        }

    def example_payload(self) -> Any:
        return [self.minimum, self.maximum]

    def example_value(self) -> Any:
        return [self.minimum, self.maximum]

    def get_random_value(self):
        n_steps = int((self.maximum - self.minimum) / self.step)
        step1 = random.randint(0, n_steps)
        step2 = random.randint(step1, n_steps)
        value1 = self.minimum + step1 * self.step
        value2 = self.minimum + step2 * self.step
        # Round to number of decimals in step so that UI doesn't display long decimals
        n_decimals = max(str(self.step)[::-1].find("."), 0)
        if n_decimals:
            value1 = round(value1, n_decimals)
            value2 = round(value2, n_decimals)
        return [value1, value2]

    def postprocess(self, value: Tuple[float, float] | None) -> Tuple[float, float]:
        """
        Parameters:
            value: Expects a tuple of two {float}s returned from function and sets slider values to them as long as they are within range (otherwise, sets to minimum and maximum values).
        Returns:
            The values of the slider within the range.
        """
        if value is None:
            return (self.minimum, self.maximum)
        return (max(min(value[0], value[1]), self.minimum), min(max(value[0], value[1]), self.maximum))

    def preprocess(self, payload: Tuple[float, float]) -> Tuple[float, float]:
        """
        Parameters:
            payload: slider values
        Returns:
            Passes slider values as a tuple of two {float}s into the function.
        """
        return tuple(payload)
