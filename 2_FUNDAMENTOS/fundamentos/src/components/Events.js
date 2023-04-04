const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log ("Ativou evento")
    };

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderiznado isso</h1>
        }
        else {
            return <h1> Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick ={handleMyEvent}> Clique aqui!</button>
            </div>
            <div>
                <button onClick = {() => console.log("clicou!!")}> Clique Aqui Também! </button>
                <button onClick = {() => {
                    if (true){
                        console.log("Isso Não deveria Existir =)");
                    }
                }}> Clique Aqui, por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}
export default Events;
