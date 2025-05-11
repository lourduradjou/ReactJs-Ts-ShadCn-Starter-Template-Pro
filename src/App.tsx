import './index.css'

import { Button } from './components/ui/button'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Click me</Button>
            <Navbar />
            hello
        </div>
    )
}

export default App
