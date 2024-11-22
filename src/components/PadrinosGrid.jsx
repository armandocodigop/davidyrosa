const PadrinosGrid = () => {
  const padrinos = [
    {
      categoria: "PADRINOS DE CIVIL Y RELIGION",
      nombres: ["Grover C. Lobo Quispe", "Bertha Tola Tola"],
    },
    {
      categoria: "PADRINOS DE CONTEO",
      nombres: ["Jaime Tola Tola", "Norma Sullcani de Tola"],
    },
    {
      categoria: "PADRINOS DE ARO",
      nombres: ["Rodolfo Ari Garcia", "Neyda Cruz Ramos"],
    },
    {
      categoria: "PADRINOS DE TORTA",
      nombres: ["Lic. Ariel Condori Villca", "Lic. Jacquelin M.Choque Ticlla"],
    },
    {
      categoria: "PADRINOS DE GRUPO",
      nombres: ["Juan Carlos Almanza Chambi", "Maura Mamani Salamanca"],
    },
    {
      categoria: "PADRINOS DE ALTAR",
      nombres: ["Carlos Miranda Quispia", "Fabiola Hurtado Quispia"],
    },
    {
      categoria: "PADRINOS DE GRUPO NACIONAL",
      nombres: ["Adolfo Cruz Choque", "Vilma Torrez Fernandez"],
    },
    {
      categoria: "PADRINO DE GRUPO ESNIGMA",
      nombres: ["Jhonny Colque Chiri", ""],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {padrinos.map((padrino, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-green-700 mb-4 border-b pb-2">
              {padrino.categoria}
            </h3>
            <div className="space-y-2">
              {padrino.nombres.map((nombre, idx) => (
                <p key={idx} className="text-gray-100">
                  {nombre}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PadrinosGrid;
