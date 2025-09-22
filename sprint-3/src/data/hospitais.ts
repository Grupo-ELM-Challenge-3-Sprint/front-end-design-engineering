export interface Hospital {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  horario: string;
  mapaUrl: string;
  imagem: string;
  alt: string;
}

export const hospitais: Hospital[] = [
  {
    id: 'vila-mariana',
    nome: 'IMREA Vila Mariana',
    endereco: 'Rua Domingo de Soto, 100 - Vila Mariana São Paulo/SP - CEP: 04026-080',
    telefone: '(11) 5549-0111',
    horario: 'Segunda a Sexta: 7h às 19h',
    mapaUrl: 'https://maps.app.goo.gl/yJ8ErztdASvJBuz17',
    imagem: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npMueecAW3SvPeHv7Zl7ZB-aMvgGWRfQYVhTPHDmlZXJ6zuZOS4MIQRcNZJD4cQg9wkdi63y5GIU2WNkwo76D4EuF9q6ZbvtuogzsxO6lIotHgY3YertZSNg4L23cCDJ-vMrWjouA=s1360-w1360-h1020-rw',
    alt: 'Fachada IMREA Vila Mariana'
  },
  {
    id: 'umarizal',
    nome: 'IMREA Umarizal',
    endereco: 'Rua Guaramembé, 589 - Umarizal São Paulo/SP - CEP: 05754-060',
    telefone: '(11) 3719-6060',
    horario: 'Segunda a Sexta: 7h às 19h',
    mapaUrl: 'https://maps.app.goo.gl/qSQCG7WwCpAy47w89',
    imagem: 'https://redelucymontoro.org.br/site/wp-content/uploads/2024/06/IMREA-Umarizal_001.jpg',
    alt: 'Fachada IMREA Umarizal'
  },
  {
    id: 'lapa',
    nome: 'IMREA Lapa',
    endereco: 'Rua Guaicurus, 1274 - Lapa São Paulo/SP - CEP: 05033-002',
    telefone: '(11) 3838-7555',
    horario: 'Segunda a Sexta: 7h às 19h',
    mapaUrl: 'https://maps.app.goo.gl/R3sU1STb2zPuhboR6',
    imagem: 'https://redelucymontoro.org.br/site/wp-content/uploads/2015/06/lapa-d39.jpg',
    alt: 'Fachada IMREA Lapa'
  },
  {
    id: 'clinicas',
    nome: 'IMREA Clínicas',
    endereco: 'Rua Particular - Portão 3 do INRAD - Cerqueira César São Paulo/SP - CEP: 05403-010',
    telefone: '(11) 2661-1000',
    horario: 'Segunda a Sexta: 7h às 19h',
    mapaUrl: 'https://maps.app.goo.gl/ok3phCwsGKuYQLFL6',
    imagem: 'https://redelucymontoro.org.br/site/wp-content/uploads/2024/06/qs_001.jpg',
    alt: 'Fachada IMREA Clínicas'
  }
];
