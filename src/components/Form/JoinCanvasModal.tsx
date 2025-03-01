// src/components/SignUpForm.tsx
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCanvasFormDetails } from '@/redux/slice/canvas-slice'
import { useRouter } from '@tanstack/react-router'

interface JoinCanvasModalProp{
    handleCloseModal: any
}

const JoinCanvasModal: React.FC<JoinCanvasModalProp> = ({ handleCloseModal }) => {
       const { canvasCode } = useSelector((state: any) => state.canvas)
    const dispatch = useDispatch()
    const router = useRouter()
    
       const handleInputChange = (e: any) => {
        const {name, value} = e.target
        dispatch(getCanvasFormDetails({name,value}))
    }

        const handleSubmit = (e: any) => {
         e.preventDefault()
            router.navigate({ to: "/drawing-canvas" })
        // authenticateUser({firstName, lastName, email: emailAddress, password, walletAddress: connectWallet},"sign-up")
    }
    
    
    return (
    <div className='fixed top-0 left-0 w-screen h-screen backdrop-blur-md bg-white/10 flex flex-col items-center justify-center' id="parent" onClick={handleCloseModal}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Create Canvas</h2>
            <form className="space-y-4">
                <FormInput label="Canvas Code" type="email" required name='canvasCode' value={canvasCode} handleChange={handleInputChange}/>
                <Button label="Proceed" type="submit" className="w-full mt-4 bg-[#D42C2CB2]" disabled={!canvasCode} onClick={handleSubmit}/>
            </form> 
            </div>
    </div>
    )
}

export default JoinCanvasModal
