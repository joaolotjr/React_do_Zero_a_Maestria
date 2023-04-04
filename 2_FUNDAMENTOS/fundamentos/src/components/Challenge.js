const Challenge = () => {

    const a = 1;
    const b = 2;

    let soma = () => {
        soma = a + b;
        console.log(soma)
    }

    return (
        <div>
            <h1>Os valores são {a} e {b}</h1>;
            <button onClick = {soma}> Clique pra Somar!</button>
        </div>
    )


}

export default Challenge;