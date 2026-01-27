import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.js";
import { User } from "../models/User.js";

export const getAllContacts=async (req,res)=>{
    try {
        const loggedInuser=req.user._id
        const filterUserById=await User.find({_id:{ $ne:loggedInuser}}).select("-password")

        res.status(200).json(filterUserById)

    } catch (error) {
        console.log("Error in Getting Contacts",error)
        return res.status(500).json({mesaage:"Internal Server Error"})
    }
}

export const getAllChatByUserId=async (req,res)=>{
    try {
        const myId=req.user._id
        const {id:UserToChat}=req.params

        const message=await Message.find({
            $or:[
                {senderId:myId,receiverId:UserToChat},
                {senderId:UserToChat,receiverId:myId}
            ]
        })

        res.status(200).json(message)
    } catch (error) {
        console.log("Not able to get chats",error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const sendMessage=async (req,res)=>{
    const {image,text}=req.body
    const senderId=req.user._id
    const {id:receiverId}=req.params

    let imageUrl
    if(image)
    {
        const uploadResponse=cloudinary.uploader.upload(image)
        imageUrl=uploadResponse.secure_url
    }

    const newMessage=new Message({
        senderId,
        receiverId,
        text,
        image:imageUrl

    })

    const savedMessage=await newMessage.save()
    return res.status(201).json(savedMessage)   
}


export const getChatPartener=async (req,res)=>{

    try {
        const loggedInuser=req.user._id
    
        const mesaage=await Message.find({
            $or:[
                {senderId:loggedInuser},{receiverId:loggedInuser}],
        })
    
        const chatPartenerId= [...new Set(mesaage.map((msg) => msg.senderId.toString()===loggedInuser.toString()?msg.receiverId.toString():msg.senderId.toString()))]
    
        const chatParteners=await User.find({_id:{$in:chatPartenerId}}).select("-password")
    
        return res.status(200).json(chatParteners)
    } catch (error) {
        console.log("Error in getChat Partener controller",error)
        return res.status(500).json({mesaage:"Interenalserver error"})
    }

}