# `argmax_gradio_components`

🧩 Custom Gradio components by Argmax, Inc.

## Components

- [RangeSlider](#rangeslider): Double-thumb slider component for precise interval selection within a certain range.

## Installation

```bash
pip install argmax_gradio_components
```

## RangeSlider
![](static/rangeslider.gif)
### Usage
```python
import gradio as gr
from argmax_gradio_components import RangeSlider

with gr.Blocks() as demo:
    range_slider = RangeSlider(minimum=0, maximum=100, label="Select Range")
    output = gr.Markdown("Selected range: {0} to {1}")
    
    range_slider.change(
        lambda x: f"Selected range: {x[0]} to {x[1]}",
        inputs=range_slider,
        outputs=output
    )

demo.launch()
```

### Component Details
### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>minimum</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>0</code></td>
<td align="left">Minimum value for slider.</td>
</tr>

<tr>
<td align="left"><code>maximum</code></td>
<td align="left" style="width: 25%;">

```python
float
```

</td>
<td align="left"><code>100</code></td>
<td align="left">Maximum value for slider.</td>
</tr>

<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
tuple[float, float] | Callable | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Default value. If callable, the function will be called whenever the app loads to set the initial value of the component. </td>
</tr>

<tr>
<td align="left"><code>step</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Increment between slider values.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>
</table>

### Events
| name | description |
|:-----|:------------|
| `change` | Triggered when the value of the RangeSlider changes either because of user input OR because of a function update. |
| `input` | This listener is triggered when the user changes the value of the RangeSlider. |
| `release` | This listener is triggered when the user releases the mouse on this RangeSlider. |
