import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Mercado',
          type: 'withdraw',
          category: 'Casa',
          amount: 500,
          createdAt: new Date('2022-09-19 11:54:00'),
        },
        {
          id: 2,
          title: 'Viagem',
          type: 'deposit',
          category: 'Pessoal',
          amount: 250,
          createdAt: new Date('2022-09-19 11:54:01'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);