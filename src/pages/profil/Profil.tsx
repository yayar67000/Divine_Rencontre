import "./profil.css";
function Profil() {
	return (
		<div className="content-profil">
			<h2> Ton profil de dieu / Deesse</h2>

			<form>
				<label>
					<div className="name-age">
						<input type="text" name="name" placeholder="Ton nom" />

						<input type="text" name="age" placeholder="Ton jeune age" />
					</div>
					<input
						type="text"
						name="description"
						className="description-input"
						placeholder="ta description foudroyante"
					/>
				</label>
				<input type="submit" className="button-save" value="Enregistrer" />
			</form>
		</div>
	);
}

export default Profil;
