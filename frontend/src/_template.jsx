const template = (
  <div>

    <main>
      <header>
        <h1>Strater kit</h1>
        <hr/>
      </header>
        <section className='search'>
          <label className='search__wrapper' htmlFor='search__input' aria-hidden='true'>
            <span className='hidden'>Search</span>
            <input className='search__input' id='search__input' type='text' aria-label='Search' />
          </label>
        </section>
        <ul className='survey-list'>
          <li className='survey-item'>
            <a className='survey-item__wrapper' href='!#'>
              <div className='survey-item__indicator'>
                <input type='checkbox' aria-label='indicator' />
                <label aria-hidden='true'>XXX</label>
              </div>
              <div className='survey-item__text'>
                <h2 className='survey-item__title'>YYYYYYYYYYYYY</h2>
              </div>
            </a>
          </li>
          <li className='survey-item'>
            <a className='survey-item__wrapper' href='!#'>
              <div className='survey-item__indicator'>
                <input type='checkbox' aria-label='indicator' />
                <label aria-hidden='true'>XXX</label>
              </div>
              <div className='survey-item__text'>
                <h2 className='survey-item__title'>YYYYYYYYYYYYY</h2>
              </div>
            </a>
          </li>
        </ul>
        <section className='result'>
          <hr/>
            <h2>Result</h2>
            <div className='result__wrapper'>
              <div className='result__chart'>
                <h3>What best sellers are available in your store?</h3>
                <div id='chart'></div>
              </div>
              <div className='result__informations'>
                <div className='result__content'>
                  <h3>What is the visit date?</h3>
                  <ul>
                    <li>Lorem ipsum dolor sit amet </li>
                    <li>consectetur adipisicing elit.</li>
                    <li>Numquam ab ea accusamus aliqu</li>
                  </ul>
                  <h3>Number of products?</h3>
                  <strong>1588</strong>
                </div>
              </div>
            </div>
      </section>
    </main>
        <footer>
          <div className='footer__logo'>
            <div className='logo'>
              <p>raknjarasoa </p>
            </div>
          </div>
          <p className='copyright'>© 2018 Made with love
        <strong className='pulse'>❤</strong>
            <span> by </span>
            <a href='https://github.com/raknjarasoa' target='_blank' rel='noopener noreferrer'>
              <strong>raknjarasoa</strong>
            </a>
            <span> | All Rights Reserved </span>
          </p>
        </footer>

  </div>
);
