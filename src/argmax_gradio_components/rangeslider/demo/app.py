import gradio as gr
from rangeslider import RangeSlider

with gr.Blocks() as demo:
    gr.Markdown("<h1 style='text-align: center;'>Range Slider</h1>")
    with gr.Row():
        with gr.Row():
            output = gr.Textbox()
        with gr.Row():
            range_slider = RangeSlider(minimum=0, maximum=100, value=(0, 100), label="Select Range")
    
    range_slider.change(
        lambda x: f"Selected range: {x[0]} to {x[1]}",
        inputs=range_slider,
        outputs=output
    )

if __name__ == "__main__":
    demo.launch()
