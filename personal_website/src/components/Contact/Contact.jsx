import React, {useState} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import emailjs from "@emailjs/browser";


export default function Contact() {
    const titleText = "Let's Connect!";
    const hookText = "Have an opportunity or project in mind? Feel free to send an email or reach out through social media!";

    const socials = [
        {
            name: "Email",
            link: "jerryxiao27@gmail.com",
            href: "mailto:jerryxiao27@gmail.com",
            icon: <EmailIcon />,
        },
        {
            name: "LinkedIn",
            link: "linkedin.com/in/jerry-xiao-3696a7246",
            href: "https://www.linkedin.com/in/jerry-xiao-3696a7246/",
            icon: <LinkedIn />,
        },
        {
            name: "Instagram",
            link: "@jerry.xiao14",
            href: "https://www.instagram.com/jerry.xiao14/",
            icon: <Instagram />,
        },
    ];


    function SocialsSection({socials}){
        return (
            <Box
                sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    m: 10
                }}
            >
                <Typography
                    variant = 'h2'
                    sx = {{
                        textTransform: 'uppercase',
                        fontWeight: '650',
                    }}
                >
                    {titleText}
                </Typography>

                <Typography
                    variant = 'h6'
                    sx = {{
                        mt: 5,
                        color: 'grey',
                    }}
                >
                    {hookText}
                </Typography>

                <Box
                    sx = {{
                        mt: 5,
                    }}
                >
                    {socials.map((social) => (
                        <Box key = {social.name}>
                            <Typography
                                variant = 'body2'
                                sx = {{
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                    color: 'grey',
                                    mb: 1,
                                    mt: 3,
                                }}
                            >
                                {social.name}
                            </Typography>
                            
                            <Typography
                                variant = 'h5'
                                component = 'a'
                                href = {social.href}
                                target = {social.name!== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                sx = {{
                                    color: "white",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#2cb0d8ff",
                                        textDecoration: "underline",
                                    }
                                }}
                            >
                                {social.link}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx = {{
                        display: 'flex',
                        gap: 2,
                        mb: 5,
                        mt: 7
                    }}
                >
                    {socials.map((social) => (
                        <Button
                        >
                            {social.icon}
                        </Button>
                    ))}
                    
                </Box>

            </Box>
        )
    }


    const textFieldSx = {
        "& .MuiInputLabel-root": {
            color: "#aaa",
            fontWeight: 650,
            fontSize: "1rem",
            letterSpacing: '0.04em'
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#2cb0d8ff",
        },
        "& .MuiOutlinedInput-root": {
            color: "white",
            "& fieldset": {
            borderColor: "#555",
            },
            "&:hover fieldset": {
            borderColor: "#2cb0d8ff",
            },
            "&.Mui-focused fieldset": {
            borderColor: "#2cb0d8ff",
            },
        },
        
    };

    
    function FormSection(){

        const [form, setForm] = useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

        const handleChange = (e) => {
            setForm({...form, [e.target.name]: e.target.value});
        }
        const templateParams = {
            title: form.subject,      // maps to {{title}} in template
            name: form.name,          // maps to {{name}}
            email: form.email,        // maps to {{email}}
            message: form.message,    // maps to {{message}}
            time: new Date().toLocaleString(), // maps to {{time}}
        };
        const handleSubmit = (e) => {
            e.preventDefault();

            if(!form.name || !form.email || !form.subject || !form.message){
                alert("Please fill in all fields.");
                return;
            }

            emailjs.send(
                "jerryxiao27",
                "template_ebe4wtf",
                templateParams,
                "U9nK9MKaLpwrs5MxD"
            )
            .then((response)=>{
                console.log("Email sent successfully!", response.status, response.text);
                alert("Message sent successfully!");
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 
            (error) => {
                console.log("Error sending email:", error);
                alert("Failed to send message. Please try again later.");
            }
            );
        }

        return (
            <Box
                component = 'form'
                sx = {{
                    display: 'flex',
                    p:8,
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                <Typography
                    variant = 'h4'
                    sx = {{
                        color: 'white',
                    }}
                >
                    Got a quick message? Reach out using the form below.
                </Typography>
                
                <TextField
                    name = "name"
                    label = "name"
                    value = {form.name}
                    onChange = {handleChange}
                    required 
                    fullWidth
                    variant = "outlined"
                    sx = {textFieldSx}
                />
                
                <TextField
                    name = "email"
                    label = "email"
                    value = {form.email}
                    onChange = {handleChange}
                    required 
                    fullWidth 
                    variant = "outlined"
                    sx = {textFieldSx}
                />

                <TextField
                    name = "subject"
                    label = "subject"
                    value = {form.subject}
                    onChange = {handleChange}
                    required 
                    fullWidth 
                    variant = "outlined"
                    sx = {textFieldSx}
                />

                <TextField
                    name = "message"
                    label = "message"
                    value = {form.message}
                    onChange = {handleChange}
                    required 
                    fullWidth 
                    multiline
                    rows = {8}
                    variant = "outlined"
                    slotProps={{
                        htmlInput: {
                        maxLength: 500,
                        },
                    }}
                    helperText={`${form.message.length}/500`}
                    FormHelperTextProps={{
                        sx: { color: "#aaa", mt: 1 }
                    }}
                    sx = {textFieldSx}
                />

                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                        mt: 2,
                        height: 50,
                        backgroundColor: "#2cb0d8ff",
                        "&:hover": { backgroundColor: "#1a9ecb" },
                    }}
                    >
                    Send Message
                </Button>
            </Box>
        )
    }

    return (
        <Box
            sx = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                //border: '1px solid green',
                height: '100%',
            }}
        >
            <Box
                sx = {{
                    backgroundColor: "#121215",
                    border: '0.5px solid grey',
                    width: '65%',
                    //height: '70%',
                    display: 'flex',
                    //border: '1px solid red'
                }}
            >
                <Box
                    sx = {{
                        display: 'flex',
                        width: '50%',
                    }}
                >
                    <SocialsSection socials = {socials}/>
                </Box>
                <FormSection />
            </Box>
        </Box>
    )
}