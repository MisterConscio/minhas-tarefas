import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
