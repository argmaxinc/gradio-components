from setuptools import setup, find_packages

setup(
    name="argmax_gradio_components",
    version="0.1.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A collection of custom Gradio components",
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/argmax_gradio_components",
    package_dir={"": "src"},
    packages=find_packages(where="src"),
    package_data={
        "argmax_gradio_components": [
            "*/backend/*/templates/",
        ],
    },
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
)