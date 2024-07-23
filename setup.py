from setuptools import setup, find_packages

VERSION = "0.1.0"

with open("README.md") as f:
    readme = f.read()

setup(
    name="argmax_gradio_components",
    version=VERSION,
    url="https://github.com/argmaxinc/gradio-components",
    description="Argmax Custom Components for Gradio",
    long_description=readme,
    long_description_content_type="text/markdown",
    author="Argmax, Inc.",
    install_requires=[
        "gradio"
    ],
    package_dir={"": "src"},
    packages=find_packages(where="src"),
    package_data={
        "argmax_gradio_components": [
            "**/*",
        ],
    },
    include_package_data=True,
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Topic :: Scientific/Engineering",
        "Topic :: Software Development",
    ],
    python_requires=">=3.9",
)
