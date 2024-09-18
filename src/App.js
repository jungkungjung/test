import logo from './logo.svg';
import './App.css';
import AppHeader from './component/AppHeader';
import CarItem from './component/CarItem';
import CarPost from './component/CarPost';


function App() {
  const textInput = <input type="text" />;
  const okButton = (
    <>
      <button>
        สักหน่อยมั้ยล่ะ
        </button>
        <p>  
        <button> 
        สักหน่อยมั้ยล่ะ2
        </button>
    </p>

    </>

  )
  return (
    <div className="app">
      <AppHeader />      
      <div className = "app-grid">
        <CarItem title="honda city" thumbnailUrl="/images/honda_01_small.jpg" />
        <CarItem title="honda civic" thumbnailUrl="/images/honda_02_small.jpg" />
        <CarItem title="honda CRV" thumbnailUrl="/images/honda_03_small.jpg" />
        <CarItem title="honda WRV" thumbnailUrl="/images/honda_04_small.jpg" />

      </div>
    </div>
  );
}

export default App;
