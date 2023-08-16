import { useEffect, useState } from "react";

// Renderização da página utilizando componente funcional
const App = () => {

	// Aplicação do hook UseState
	const [usuarios, setUsuarios] = useState(["João", "José", "Maria"]);
	const [newUser, SetNewUser] = useState("");
	const [count, SetCount] = useState(0);

	// Aplicação do hook useEffect
	useEffect(() => {
		setTimeout(() => {
			setUsuarios([...usuarios, "Pedro"]);
		}, 3000);
	}, []);

	useEffect(() => {
		SetCount(usuarios.length);
	}, [usuarios]);

	const handleAddUser = () => {
		setUsuarios([...usuarios, newUser]);
		SetNewUser("");
	};

	return (
		<div className="App">
			<h1>Hello World</h1>

			<h3>Cadastrar novo usuário</h3>

			<h3>Total: {count}</h3>
			<label>Nome: </label>
            
			<input
				type="text"
				value={newUser}
				onChange={(event) => SetNewUser(event.target.value)}
			/>

			<button onClick={handleAddUser}>Adicionar</button>

			{usuarios.map((user) => (
				<p key={user}>{user}</p>
			))}
		</div>
	);
};

export default App;