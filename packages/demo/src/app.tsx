import './styles.pcss'

import {Switch} from '@slimr/router'

import {router} from './router'

/**
 * The main app component
 */
export function App() {
  return (
    <div data-testid="appComponent">
      <Switch router={router} />
    </div>
  )
}
