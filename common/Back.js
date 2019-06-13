import React, { Component } from 'react'
import Link from 'next/link'

class Back extends Component {
    render() {
        return (
            <div className="back">
                <Link href="/"><a className="menu">Back</a></Link>
            </div>
        )
    }
}

export default Back;