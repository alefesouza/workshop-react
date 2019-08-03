import React from 'react'; 

class HelloStateful extends React.Component {
    state = {
        clicou: 'ainda não clicou'
    }

    componentDidMount() {
        console.log('[HelloStateful] Apareceu na tela');
    }

    handleClick() {
        this.setState({
            clicou: 'clicou'
        });
    }

    render() {
        return (
            <div>
                Olá, {this.props.nome} você {this.state.clicou}.

                <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
            </div>
        );
    }
}

export default HelloStateful;
