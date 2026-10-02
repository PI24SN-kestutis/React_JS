import ProductOrder from './components/ProductOrder';
import Calculator from './components/Calculator';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React būsena ir parametrai</h1>

      {/* ========================================================= */}
      {/* 1 UŽDUOTIS: Prekės kiekis ir bendra kaina                */}
      {/* Komponentų ryšys: App -> ProductOrder                     */}
      {/* ========================================================= */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1 Užduotis: Prekės užsakymas (ProductOrder)</h2>
        <p style={{ marginBottom: '16px', color: '#555' }}>
          Kiekvienas komponentas turi nepriklausomą būseną, valdomą mygtukais „+“, „−“ ir „Atkurti kiekį“.
        </p>

        {/* Pirma prekė */}
        <ProductOrder name="Kava 'Arabica Supreme'" price={7.5} />

        {/* Antra prekė (nepriklausoma būsena) */}
        <ProductOrder name="Ekologiška arbata 'Matcha'" price={12.99} />
      </section>

      {/* ========================================================= */}
      {/* 2 UŽDUOTIS: Skaičiuotuvas su dviem įvestimis             */}
      {/* Komponentų ryšys: App -> Calculator -> CalculationResult  */}
      {/* ========================================================= */}
      <section style={{ marginBottom: '40px' }}>
        <h2>2 Užduotis: Skaičiuotuvas (Calculator)</h2>
        <p style={{ marginBottom: '16px', color: '#555' }}>
          Valdomi įvesties laukai, veiksmų pasirinkimas, dalybos iš nulio apsauga ir atskiras rezultato komponentas.
        </p>

        <Calculator />
      </section>
    </div>
  );
}

export default App;
