function handleClick(){
    console.log("Button was clicked!");
}
function handleMouseOver(){
    console.log("Bye!");
}
function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem velit hic quisquam. Voluptas distinctio culpa pariatur praesentium illum voluptates eveniet, voluptatum consequatur saepe itaque molestiae nulla aspernatur repellat repudiandae neque nostrum magni quos tempora placeat? Culpa quidem quis soluta facilis facere adipisci non beatae nostrum tempore sed. Reiciendis, delectus.</p>
            <button onDoubleClick={handleDblClick}>Double click me</button>
        </div>
    );
}