<script lang="ts">
    import type { Gradio } from "@gradio/utils";
    import { Block, BlockTitle } from "@gradio/atoms";
    import { StatusTracker } from "@gradio/statustracker";
    import type { LoadingStatus } from "@gradio/statustracker";
    import { afterUpdate } from "svelte";

    export let gradio: Gradio<{
        change: never;
        input: never;
        release: [number, number];
        clear_status: LoadingStatus;
    }>;
    export let elem_id = "";
    export let elem_classes: string[] = [];
    export let visible = true;
    export let value: [number, number];
    export let label: string;
    export let info: string | undefined = undefined;
    export let container = true;
    export let scale: number | null = null;
    export let min_width: number | undefined = undefined;
    export let minimum: number;
    export let maximum: number;
    export let step: number;
    export let show_label: boolean;
    export let interactive: boolean;
    export let loading_status: LoadingStatus;
    export let value_is_output = false;

    let sliderContainer: HTMLDivElement;
    let minThumb: HTMLDivElement;
    let maxThumb: HTMLDivElement;
    let track: HTMLDivElement;

    const id = `range_id_${Math.random().toString(36).substr(2, 9)}`;

    function handle_change(): void {
        gradio.dispatch("change");
        if (!value_is_output) {
            gradio.dispatch("input");
        }
    }

    afterUpdate(() => {
        value_is_output = false;
        updateSlider();
    });

    function handle_release(): void {
        gradio.dispatch("release", value);
    }

    function clamp(): void {
        value[0] = Math.max(minimum, Math.min(roundToStep(value[0]), value[1]));
        value[1] = Math.min(maximum, Math.max(value[0], roundToStep(value[1])));
        value = value; // trigger reactivity
        updateSlider();
        handle_release();
    }

    function updateSlider(): void {
        const range = maximum - minimum;
        const minPosition = ((value[0] - minimum) / range) * 100;
        const maxPosition = ((value[1] - minimum) / range) * 100;

        minThumb.style.left = `${minPosition}%`;
        maxThumb.style.left = `${maxPosition}%`;
        track.style.left = `${minPosition}%`;
        track.style.width = `${maxPosition - minPosition}%`;
    }

    function onMouseDown(isMin: boolean) {
        const move = (e: MouseEvent) => {
            const rect = sliderContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newValue = roundToStep(minimum + percent * (maximum - minimum));
            if (isMin) {
                value[0] = Math.min(Math.max(newValue, minimum), value[1]);
            } else {
                value[1] = Math.max(Math.min(newValue, maximum), value[0]);
            }
            value = value; // trigger reactivity
            updateSlider();
            handle_change();
        };

        const up = () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
            handle_release();
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
    }

	function roundToStep(value: number): number {
		const decimalPlaces = Math.ceil(Math.log(step) * -1);
        const newValue = Math.round((value - minimum) / step) * step + minimum;
		return Number(newValue.toFixed(decimalPlaces));
    }

    $: disabled = !interactive;

    $: value, handle_change();
</script>

<Block {visible} {elem_id} {elem_classes} {container} {scale} {min_width}>
    <StatusTracker
        autoscroll={gradio.autoscroll}
        i18n={gradio.i18n}
        {...loading_status}
        on:clear_status={() => gradio.dispatch("clear_status", loading_status)}
    />

    <div class="wrap">
        <div class="head">
            <label for={id}>
                <BlockTitle {show_label} {info}>{label}</BlockTitle>
            </label>

            <div class="inputs">
                <input
                    aria-label={`minimum value input for ${label}`}
                    data-testid="number-input-min"
                    type="number"
                    bind:value={value[0]}
                    min={minimum}
                    max={maximum}
                    on:blur={clamp}
                    {step}
                    {disabled}
					on:change={() => { value[0] = roundToStep(value[0]); clamp(); }}
				/>
                <input
                    aria-label={`maximum value input for ${label}`}
                    data-testid="number-input-max"
                    type="number"
                    bind:value={value[1]}
                    min={minimum}
                    max={maximum}
                    on:blur={clamp}
                    {step}
                    {disabled}
					on:change={() => { value[1] = roundToStep(value[1]); clamp(); }}
				/>
            </div>
        </div>
    </div>

    <div class="slider-container" bind:this={sliderContainer}>
        <div class="slider-track"></div>
        <div class="slider-track-highlight" bind:this={track}></div>
        <div class="slider-thumb min" bind:this={minThumb} on:mousedown={() => onMouseDown(true)}></div>
        <div class="slider-thumb max" bind:this={maxThumb} on:mousedown={() => onMouseDown(false)}></div>
    </div>
</Block>

<style>
    .inputs {
        display: flex;
        gap: var(--size-2);
    }

    .slider-container {
        position: relative;
        height: 20px;
        margin-top: 10px;
		margin-left: 1vh;
		margin-right: 1vh;
    }

    .slider-track {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 4px;
        background-color: var(--neutral-200);
    }

    .slider-track-highlight {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 4px;
        background-color: var(--slider-color);
    }

    .slider-thumb {
        position: absolute;
        top: 50%;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

	.head {
		display: flex;
		justify-content: space-between;
	}

	input[type="number"] {
		display: block;
		position: relative;
		outline: none !important;
		box-shadow: var(--input-shadow);
		border: var(--input-border-width) solid var(--input-border-color);
		border-radius: var(--input-radius);
		background: var(--input-background-fill);
		padding: var(--size-2) var(--size-2);
		height: var(--size-6);
		color: var(--body-text-color);
		font-size: var(--input-text-size);
		line-height: var(--line-sm);
		text-align: center;
	}

	input:disabled {
		-webkit-text-fill-color: var(--body-text-color);
		-webkit-opacity: 1;
		opacity: 1;
	}

	input[type="number"]:focus {
		box-shadow: var(--input-shadow-focus);
		border-color: var(--input-border-color-focus);
	}

	input::placeholder {
		color: var(--input-placeholder-color);
	}

	input[disabled] {
		cursor: not-allowed;
	}
</style>
