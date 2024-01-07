<picture>
<img src="https://github.com/pirsonxyz/Rusty_Llama/blob/main/RUSTY.png" />
</picture>


## Rusty Llama Webapp fork by Pirson
A simple webapp to showcase the ability to write a simple chatbot webapp using only Rust, TailwindCSS and an Open Source language model such as a variant of GPT, LLaMA, etc.

## Example Response
Q: Whats the First Law of Motion? A: First Law (Law of Inertia) - An object at rest will remain at rest, and an object in uniform linear acceleration will continue to move with a constant velocity, unless acted upon by an external force. Explanation: This means that if there is no net force acting on an object, it won't experience any change in its motion. If the object is already moving uniformly (at a steady speed and direction), then it will continue to do so without changing unless something else forces it to stop or slow down/speed up/change direction.

## Demo
<picture>
<img src="https://github.com/pirsonxyz/Rusty_Llama/blob/main/demo.gif"/>
</picture>

## Setup Instructions

### Hardware
By default, the project has CPU' acceleration enabled.I f you are on a system with an Nvidia GPU, you may need to add CUDA as a feature (I haven't tested this, anyone who does so feel free to PR an update to this readme).

### Rust Toolchain
You'll need to use the nightly Rust toolchain, and install the `wasm32-unknown-unknown` target as well as the Trunk and `cargo-leptos` tools:
```
rustup toolchain install nightly
rustup target add wasm32-unknown-unknown
cargo install trunk cargo-leptos
```
### Model
You'll also need to download a model (in GGML format) of your choice that is [supported by the Rustformers/llm Crate](https://huggingface.co/models?search=ggml).

In the root of the project directory, you'll find a `.env` file where an environment variable called `MODEL_PATH` is defined. Replace the value with the full path to the desired model file.

### TailwindCSS
Install TailwindCSS with `bun install -D tailwindcss`
Or `npm install -D tailwindcss`

### Run
To run the project locally, 
1. run `npx tailwindcss -i ./input.css -o ./style/output.css --watch` in a terminal - this will build `style/output.css` and automatically rebuild when a change is detected in `input.css`
1. `cargo leptos watch` in the project directory. 
1. In in your browser, navigate to [http://localhost:3000/?](http://localhost:3000/?)

## Tested Models
* [Wizard-Vicuna-7B-Uncensored.ggmlv3.q8_0.bin](https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML)      * [orca-mini-3b.ggmlv3.q5_0.bin](https://huggingface.co/TheBloke/orca_mini_3B-GGML/blob/main/orca-mini-3b.ggmlv3.q5_0.bin)
* [Wizard-Vicuna-7B-Uncensored.ggmlv3.q4_K_S.bin](https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML)
* [gpt4-x-vicuna-13B.ggmlv3.q4_0.bin](https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML)
* [chronos-hermes-13b.ggmlv3.q5_1.bin](https://huggingface.co/TheBloke/chronos-hermes-13B-GGML)
* [Samantha-7B.ggmlv3.q4_0.bin](https://huggingface.co/TheBloke/Samantha-7B-GGML/blob/main/Samantha-7B.ggmlv3.q4_0.bin)

<picture>
<img src="https://github.com/pirsonxyz/Rusty_Llama/blob/main/LLAMA.png" />
</picture>

## Donate
# xmr 
<picture>
<img src="https://github.com/pirsonxyz/Rusty_Llama/blob/main/address.png"/>
</picture>

84ocb3sVs4uB8dYYTNjYTsUguG7NGmWZJ5kCtXqbAP7Zjkx62ogNSTDBfy1mfJoGezAvCe31V1kp5EqiEBRUHrDd8HoqpDi
# eth 
0x447bc49b9F42541D9A5bEC35c3104d3A3c5c24Be
