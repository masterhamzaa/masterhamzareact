import './App.css';
import React, { Component } from 'react'




class Personne extends Component {
  render() {
    return <pre>h a m z a  c l a s s</pre>;
  }
}


const Pht = () => {
  return <div>
    <div className="form-group">
      <label forHtml="pht">P r i x  &nbsp; h o r s  &nbsp; t a x :</label>
      <input type="text"class="form-control" name="pht" id="pht" aria-describedby="helpId" placeholder="" />
    </div>
  </div>
}

const Tva = () => {
  return <div className="form-group">
  <label for="ttv">T a u x &nbsp;  t v a :</label>
  <input type="text"class="form-control" name="ttv" id="ttv" aria-describedby="helpId" placeholder="" />
</div>

}

const Buttons = () => {
  return <div>
    <button>calculer</button> &nbsp; &nbsp;
    <button>initialiser</button>
  </div>
}


class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Liste de courses pour {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

function App() {
  let p1 = "React a été conçu dès le départ pour une adoption progressive, et vous pouvez utiliser React a minima ou autant que nécessaire. Que vous souhaitiez avoir un aperçu de React, ajouter de l’interactivité à une simple page HTML ou démarrer une application React complète, les liens de cette section vous aideront à bien démarrer.";
  let p2 = "React a été conçu dès le départ pour une adoption progressive, et vous pouvez utiliser React a minima ou autant que nécessaire. Que vous souhaitiez avoir un aperçu de React, ajouter de l’interactivité à une simple page HTML ou démarrer une application React complète, les liens de cette section vous aideront à bien démarrer.";
  let p3 = "React a été conçu dès le départ pour une adoption progressive, et vous pouvez utiliser React a minima ou autant que nécessaire. Que vous souhaitiez avoir un aperçu de React, ajouter de l’interactivité à une simple page HTML ou démarrer une application React complète, les liens de cette section vous aideront à bien démarrer.";
  let h2 = "React pour les débutantes";
  let p4 = "Si vous trouvez que la documentation React va un peu trop vite pour vous, consultez cet aperçu de React par Tania Rascia. Il présente les concepts les plus importants de React de façon détaillée et conviviale pour les débutant·e·s. Une fois que vous avez terminé, essayez à nouveau la documentation !";



  return (
// code jsx :
<div className='ar'>
      <center><h1><em>R  E  A  C  T   H   A   M   Z  A</em></h1></center><br />
      <article>
        <h1>R e a c t</h1>  <Personne /> 
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <h2>{h2}</h2>
        <p>{p4}</p>
       

</article><br />
<article class="ar2">
    <Pht />
    <Tva />
    <div class="b"><Buttons /></div>
  <ShoppingList />
  </article>
  
</div>
  );
}

export default App;
