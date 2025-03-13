function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write something" />
            <br />
            <button>Submit</button>
        </form>
    );
}