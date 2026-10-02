import ProductCard from './components/ProductCard';
import Wrapper from './components/Wrapper';

function App() {
  // 2 Užduotis: Naudotojo informacijos objektas
  const user = {
    name: 'Vardenis Pavardenis',
    age: 21,
    email: 'vardenis.pavardenis@viko.lt',
    country: 'Lietuva'
  };

  return (
    <div style={{ fontSize: '32px', lineHeight: 1.25, margin: '20px 0' }}>
      <h1>React komponentai ir JSX sintaksė</h1>

      {/* ========================================================= */}
      {/* 1 UŽDUOTIS: Prekės kortelė (App -> ProductCard)           */}
      {/* ========================================================= */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1 Užduotis: Prekės kortelės (ProductCard)</h2>

        {/* Pirma prekė */}
        <ProductCard
          title="Belaidės ausinės 'SoundPro'"
          price={79.99}
          description="Aukštos kokybės belaidės ausinės su aktyviu triukšmo slopinimu."
        />

        {/* Antra prekė (pakartotinis ProductCard panaudojimas) */}
        <ProductCard
          title="Mechaninė klaviatūra 'KeyMaster'"
          price={119.50}
          description="RGB apšvietimas, tylūs mechaniniai jungikliai ir patogus riešo palaikymas."
        />
      </section>

      {/* ========================================================= */}
      {/* 2 UŽDUOTIS: Prop Drilling demonstracija                  */}
      {/* Grandinė: App -> Wrapper -> ProfileContainer -> ProfileDetails */}
      {/* ========================================================= */}
      <section>
        <h2>2 Užduotis: Naudotojo profilis (Prop Drilling)</h2>
        <p>
          Duomenys perduodami per grandinę:{' '}
          <code>App → Wrapper → ProfileContainer → ProfileDetails</code>
        </p>

        {/* Perduodame 'user' tik į Wrapper */}
        <Wrapper user={user} />
      </section>
    </div>
  );
}

export default App;
