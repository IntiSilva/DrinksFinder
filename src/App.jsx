import { Container, ModalBody } from 'react-bootstrap'
import Forms from './components/Forms'
import DrinksList from './components/DrinksList'
import DrinkModal from './components/DrinkModal'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
          <header className="py-5">
            <h1>Drinks Finder</h1>
          </header>


          <Container className='mt-5'>
              <Forms />

              <DrinksList />

              <DrinkModal />
          </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
