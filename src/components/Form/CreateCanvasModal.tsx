// src/components/SignUpForm.tsx
import React, { useEffect } from 'react'
import FormInput from './FormInput'
import Button from './Button'
import TextArea from './TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { getCanvasFormDetails } from '@/redux/slice/canvas-slice'
import { generateRandomAlphanumericCode } from '@/helpers'
import {  useRouter } from '@tanstack/react-router'

interface CreateCanvsModalProp{
    handleCloseModal: any
}
const CreateCanvasModal: React.FC<CreateCanvsModalProp> = ({ handleCloseModal }) => {
    const { canvasCode, nftName, nftDescription } = useSelector((state: any) => state.canvas)
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

    useEffect(() => {
        const code = generateRandomAlphanumericCode()
        dispatch(getCanvasFormDetails({ name: "canvasCode", value: code }))
    },[])
    
    return (
    <div className='fixed top-0 left-0 w-screen h-screen backdrop-blur-md bg-white/10 flex flex-col items-center justify-center' id="parent" onClick={handleCloseModal}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Canvas</h2>
        <form className="space-y-4">
            <FormInput label="Canvas Code" type="text" required name="canvasCode" value={canvasCode} handleChange={handleInputChange} disabled={true} />
            <FormInput label="NFT Name" type="text" required name='nftName' value={nftName} handleChange={handleInputChange}/>
            <TextArea label="NFT Description"  required name="nftDescription" value={nftDescription} handleChange={handleInputChange}/>
            <Button label="Proceed" type="submit" className="w-full mt-4 bg-[#D42C2CB2]" disabled={!canvasCode || !nftName || !nftDescription} onClick={handleSubmit}/>
        </form> 
        </div>
    </div>
)}

export default CreateCanvasModal
