import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'

import {Layout} from '../components/Layout'
import {IShow} from '../models/IShow'

type IndexProps = {
  shows: IShow[],
}

export default class Index extends React.Component<IndexProps, {}> {

  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log('Fetched movies, count=', data.length)
    return {shows: data.map((d: {show: IShow}) => d.show)}
  }

  render() {
    return (
      <Layout>
        <Title>Batman TV Shows</Title>
        <ul>
          {
            this.props.shows.map(show => (
              <li key={show.id}>
                <Link
                  href={`/post?id=${show.id}`}
                  as={`/p/${show.id}`}
                >
                  <a>{show.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </Layout>
    )
  }
}

const Title = styled.h1`
  color: red;
`