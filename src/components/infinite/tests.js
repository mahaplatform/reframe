import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Infinite from './infinite'

describe('infinite component', () => {

  describe('actions', () => {

    it('can dispatch fetchDelay', () => {

      const expected = {
        type: 'FETCH_DELAY'
      }

      expect(actions.fetchDelay()).to.eql(expected)

    })

    it('can dispatch fetchTimeout', () => {

      const expected = {
        type: 'FETCH_TIMEOUT'
      }

      expect(actions.fetchTimeout()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        all: null,
        records: null,
        request_id: null,
        status: 'pending',
        total: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can fetchRequest', () => {

      const state = {}

      const action = {
        type: 'FETCH_REQUEST',
        request_id: '4gik'
      }

      const expected = {
        request_id: '4gik',
        status: 'loading'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchSuccess with mismatched request_ids', () => {

      const state = {
        request_id: 'ab12'
      }

      const action = {
        type: 'FETCH_SUCCESS',
        request_id: '4gik'
      }

      const expected = {
        request_id: 'ab12'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchSuccess with non loading status', () => {

      const state = {
        status: 'loaded'
      }

      const action = {
        type: 'FETCH_SUCCESS'
      }

      const expected = {
        status: 'loaded'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchSuccess with first page of data', () => {

      const state = {
        status: 'loading',
        request_id: 'd4gf',
        records: []
      }

      const action = {
        type: 'FETCH_SUCCESS',
        request_id: 'd4gf',
        result: {
          data: [
            { foo: 1 }
          ],
          pagination: {
            all: 5,
            skip: 0,
            total: 3
          }
        }
      }

      const expected = {
        all: 5,
        records: [
          { foo: 1 }
        ],
        request_id: null,
        status: 'loaded',
        total: 3
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchSuccess with second page of data', () => {

      const state = {
        all: 5,
        records: [
          { foo: 1 }
        ],
        request_id: 's7h5',
        status: 'loading',
        total: 3
      }

      const action = {
        type: 'FETCH_SUCCESS',
        request_id: 's7h5',
        result: {
          data: [
            { foo: 2 }
          ],
          pagination: {
            all: 5,
            skip: 1,
            total: 3
          }
        }
      }

      const expected = {
        all: 5,
        records: [
          { foo: 1 },
          { foo: 2 }
        ],
        request_id: null,
        status: 'loaded',
        total: 3
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchSuccess with last page of data', () => {

      const state = {
        all: 5,
        records: [
          { foo: 1 },
          { foo: 2 }
        ],
        request_id: 'b1g5',
        status: 'loading',
        total: 3
      }

      const action = {
        type: 'FETCH_SUCCESS',
        request_id: 'b1g5',
        result: {
          data: [
            { foo: 3 }
          ],
          pagination: {
            all: 5,
            skip: 2,
            total: 3
          }
        }
      }

      const expected = {
        all: 5,
        records: [
          { foo: 1 },
          { foo: 2 },
          { foo: 3 }
        ],
        request_id: null,
        status: 'completed',
        total: 3
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchFailure', () => {

      const state = {}

      const action = {
        type: 'FETCH_FAILURE'
      }

      const expected = {
        status: 'failed'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchDelay', () => {

      const state = {}

      const action = {
        type: 'FETCH_DELAY'
      }

      const expected = {
        status: 'delayed'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can fetchTimeout', () => {

      const state = {}

      const action = {
        type: 'FETCH_TIMEOUT'
      }

      const expected = {
        status: 'timeout'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const infinite = shallow(<Infinite />)
      expect(infinite.is('div.reframe-infinite')).to.be.true

    })

  })

})
