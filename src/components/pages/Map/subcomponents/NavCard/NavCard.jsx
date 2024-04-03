import React from 'react';

const NavCard = ({image, setState, state}) => {

    const updateValue = (value) => {
        // console.log(state.currentStep + value)
        if(state.currentStep + value >= 0 && state.currentStep + value < state.steps.length) {
            setState({...state, currentStep: state.currentStep + value})
        } else {
            console.log("max or min value exceeded")
        }

    }

    const parseInstruction = (text) => {
        console.log(state.currentStep, state.steps.length)
        try {
            return text.replaceAll("<b>","")
            .replaceAll("</b>"," ")
            .replaceAll("</div>","")
            .replaceAll(`<div style="font-size:0.9em">`,"")
            .replaceAll("/<wbr/>"," ")
        } catch {
            return "{$invalidValue}"
        }
    }

    // console.log(state.steps, state.currentStep, state.steps[state.currentStep])
    let style = "animation-slideRight fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-md"

    return (
        <div className='NavCard z-10 inline-flex fixed top-10 w-full sm:w-1/2 inset-x-0.right0 bg-blue-500 text-white p-4 rounded-lg shadow-md'>
            <div className='inline-flex'>
                <img src="" alt="" />
                {state.currentStep > 0 ? (
                <>
                    <button
                        className='bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={() => updateValue(-1)}
                        >{"<"}</button>
                </>): null}
            </div>
            <div className='flex-1 max-w-xs p-2 text-center'>
                {/* <p>ss</p> */}
                {parseInstruction(state.steps[state.currentStep].instructions)}
            </div>
            <div className='inline-flex'>
            {state.currentStep <= state.steps.length-2 ? (
                <>
                    <button
                        className='bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={() => updateValue(1)}
                        >{">"}</button>
                </>): null}
            </div>
        </div>
    );
}

export default NavCard;