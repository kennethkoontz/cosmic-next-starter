import Navbar from '../components/Navbar';
import css from './index.scss';
import Cosmic from 'cosmicjs';

const Index = ({data}) => (
  <div className={css.index}>
    <Navbar />
    <h1>Home</h1>
    <div>
      <pre style={{}}>
        {JSON.stringify(data, undefined, 2)}
      </pre>
    </div>
  </div>
);

Index.getInitialProps = async () => {
  if (!process.env.COSMIC_BUCKET) {
    return {}
  }

  const api = Cosmic();
  const bucket = api.bucket({
    slug: process.env.COSMIC_BUCKET,
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  });
  const data = await bucket.getBucket();
  return {data};
}

export default Index;