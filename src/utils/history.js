import {useQueries} from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createMemoryHistory from 'history/lib/createMemoryHistory'

if(process.env.NODE_ENV === 'test') {
  var history = useQueries(createMemoryHistory)()
}
else {
  var history = useQueries(createBrowserHistory)()
}

export default history
