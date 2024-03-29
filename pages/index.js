import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Image from 'next/image';
import USPhoto from '/public/UnionSquarePhoto.jpg'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      });
    }, 350);
  }
  render() {
    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <div>
          <Head>
            <title>Union Square Downtown | Union Square Grand Rapids</title>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
          </Head>

          {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}

          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
          </div>

          <div id="bg">
            <Image src={USPhoto} alt='Union Square Photo' layout='fill' />
            {/* <video autoPlay muted loop playsinline="true" disablePictureInPicture="true">
              <source src='https://polyp-photos.netlify.app/BackgroundVideoCompressed.mp4' type='video/mp4' />
            </video> */}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
