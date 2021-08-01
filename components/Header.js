import headerStyles from '../styles/Header.module.css';

function Header() {
  const x = 2;

  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>

      <p className={headerStyles.description}>
        Keep update
      </p>
      {/* <h1 className='title'>
        <span>WebDev</span> News
      </h1>

      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'green'};
          }
        `}
      </style> */}
    </div>
  );
}

export default Header;
