import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const contadorSlice = createSlice({
name: 'contador',
initialState: { valor: 0 },

reducers: {

incrementar: (state) => {
state.valor += 1;
},

decrementar: (state) => {
state.valor -= 1;
},

incrementarPorValor: (state, action) => {
state.valor += action.payload;
}

}
});

const { incrementar, decrementar, incrementarPorValor } = contadorSlice.actions;

const store = configureStore({
reducer: {
contador: contadorSlice.reducer
}
});

// 3. COMPONENTE VISUAL
function Contador() {

const valorAtual = useSelector((state) => state.contador.valor);

const dispatch = useDispatch();

return (

<div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>

<h1>Contador Redux</h1>

<h2 style={{ fontSize: '3rem', color: '#646cff' }}>
{valorAtual}
</h2>

<div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>

<button onClick={() => dispatch(incrementar())}>
Incrementar (+1)
</button>

<button onClick={() => dispatch(decrementar())}>
Decrementar (-1)
</button>

<button onClick={() => dispatch(incrementarPorValor(5))}>
Adicionar 5
</button>

</div>

</div>

);
}

// 4. RENDERIZAÇÃO
export default function App() {
return (
<Provider store={store}>
<Contador />
</Provider>
);
}