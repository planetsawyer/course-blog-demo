function ContactPage () {

    const commoncss = "border border-gray-600 border-2 p-4 rounded"
    return (
        <div className = "p-5">
            <form className = "flex flex-col gap-y-5">
                <input className = {commoncss} placeholder ="Enter name"/>
                <input className = {commoncss} placeholder = "Enter email"/>
                <textarea className = {commoncss} placeholder = "Enter a message"/>
                <button className = "bg-blue-200 p-3 rounded self-center" type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactPage;