import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../../App.css';
import TableOfContents from '../TableOfContents';


export class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="row divMargs">
            <div class="col-9">
            <div class="mb-5"></div>
            
                <h2 id="Introduksjon">Introduksjon</h2>
                <hr/>
                
                GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.<br/>

                This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code.
                
                In this quickstart guide, you will:

                Create and use a repository
                Start and manage a new branch
                Make changes to a file and push them to GitHub as commits
                Open and merge a pull request
                To complete this tutorial, you need a GitHub account and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software that GitHub is built on).



                <div class="space"></div>
            
                <h3 id="Komigang">Kom i gang</h3>
                <hr/>
                
                Lag bruker på GitHub her<br/> Last ned git <a href="https://git-scm.com/downloads" style={{ color: '#0000FF' }}> her</a>
                <SyntaxHighlighter language="bash" style={defaultStyle} wrapLines={true}>
                {'git clone repo \n '}
                </SyntaxHighlighter>
                
                
                
                GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
                This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code. In this quickstart guide, you will: Create and use a repository Start and manage a new branch Make changes to a file and push them to GitHub as commits Open and merge a pull request To complete this tutorial, you need a GitHub account and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software that GitHub is built on).
                GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
                This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code. In this quickstart guide, you will: Create and use a repository Start and manage a new branch Make changes to a file and push them to GitHub as commits Open and merge a pull request To complete this tutorial, you need a GitHub account and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software that GitHub is built on).
                GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
                This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code. In this quickstart guide, you will: Create and use a repository Start and manage a new branch Make changes to a file and push them to GitHub as commits Open and merge a pull request To complete this tutorial, you need a GitHub account and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software that GitHub is built on).
           
        </div>
        
        <div class="col-3 p-3 mb-2 bg-light text-dark">
        <div class="mb-5"></div>
        <TableOfContents/>
        </div>
        </div>
        </React.Fragment>

        )
    }
}

export default Home
