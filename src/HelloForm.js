import React from 'react';

class HelloForm extends React.Component {
    state = {
        texto: ''
    };

    handleTextChange(e) {
        this.setState({
            texto: e.target.value
        });
    }

    handleClick() {
        this.props.exibeAlerta(this.state.texto);
    }

    render() {
        return (
            <div>
                Digite o texto: <input type="text" onChange={this.handleTextChange.bind(this)}></input>
                <div>{this.state.texto}</div>
                <button onClick={this.handleClick.bind(this)}>Exibir alerta</button>
            </div>
        )
    }
}

export default HelloForm;
