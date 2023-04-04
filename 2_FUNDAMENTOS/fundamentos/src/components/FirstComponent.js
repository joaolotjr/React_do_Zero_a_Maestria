// Arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // Primeiro componente

    return (
        <div>
             {/* comentario no Jxs */}
            <h1>Meu primeiro componente</h1>
            <p className= "teste">Meu texto </p>
            <MyComponent/>
            {/**/}
        </div>
    );

};

export default FirstComponent;
