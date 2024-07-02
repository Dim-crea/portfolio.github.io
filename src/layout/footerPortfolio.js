
import GitHub from "../assets/picture/GitHub.svg"
import LinkedIn from "../assets/picture/LinkedIn 2.svg"

export default function FooterPortfolio () {
    return (
        <footer className="border bg-white fixed bottom-0 w-full py-2 ">
            <div className='flex justify-evenly'>
            <a href="https://github.com/Dim-crea"><img src={GitHub} className="h-10"></img></a>
            <a href="https://www.linkedin.com/in/hauterville-dimitry-840562243/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LinkedIn} className="h-10"></img></a>
            </div>
            
        </footer>
        
    )
}