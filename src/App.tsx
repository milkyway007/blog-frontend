import { Post } from './model/post'

import { Topic } from './constants/topic-enum'

import PageContent from './components/content/PageContent'
import Footer from './components/footer/Footer'
import UpperNavbar from './components/header/header/Header'
import TopicsNavbar from './components/header/topics/Topics'

const HEADER = 'Liidia Laada Blog'

const DUMMY_POSTS: Post[] = [
	{
		id: 1,
		title: 'How to Internationalize Numbers with JavaScript',
		abstract:
			'Presenting numbers in a readable format takes many forms, from visual charts to simply adding punctuation. Those punctuation, however, are different based on internationalization. Some countries use , for decimal, while others use .. Worried about having to code for all this madness?',
		article:
			"Presenting numbers in a readable format takes many forms, from visual charts to simply adding punctuation. Those punctuation, however, are different based on internationalization. Some countries use , for decimal, while others use .. Worried about having to code for all this madness? Don't -- JavaScript provides a method do the hard work for you! The Number primitive has a toLocaleString method to do the basic formatting for you: It's a major relief that JavaScript provides us these type of helpers so that we don't need to rely on bloated third-party libraries. No excuses -- the tool is there!",
		timestamp: new Date('2022-12-19'),
		topic: Topic.JS,
	},
	{
		id: 2,
		title: 'How to Use window.crypto in Node.js',
		abstract:
			'One of the ideological sticking points of the first JavaScript framework was was extending prototypes vs. wrapping functions. Frameworks like MooTools and Prototype extended prototypes while jQuery and other smaller frameworks did not. Each had their benefits, but ultimately all these years later I still...',
		article:
			"I've been writing a bunch of jest tests recently for libraries that use the underlying window.crypto methods like getRandomValues() and window.crypto.subtle key management methods. One problem I run into is that the window.crypto object isn't available, so I need to shim it. To use the window.crypto methods, you will need Node 15+. You can set the window.crypto by importing the crypto package and setting it on the global: I really loathe creating mock functions for missing libraries in Node because they can lead to faulty positives on tests; I really appreciate webcrypto being available!",
		timestamp: new Date('2022-12-19'),
		topic: Topic.NodeJS,
	},
	{
		id: 3,
		title: 'How to Extend Prototypes with JavaScript',
		abstract:
			"I've been writing a bunch of jest tests recently for libraries that use the underlying window.crypto methods like getRandomValues() and window.crypto.subtle key management methods. One problem I run into is that the window.crypto object isn't available, so I need to shim it.To use the window.crypto...",
		article:
			"One of the ideological sticking points of the first JavaScript framework was was extending prototypes vs. wrapping functions. Frameworks like MooTools and Prototype extended prototypes while jQuery and other smaller frameworks did not. Each had their benefits, but ultimately all these years later I still believe that the ability to extend native prototypes is a massive feature of JavaScript. Let's check out how easy it is to empower every instance of a primitive by extending prototypes! Every JavaScript native, like Number, String, Array, Object, etc. has a prototype. Every method on a prototype is inherited by every instance of that object. For example, we can provide every `Array instance with a unique method by extending its prototype: Note that if you can also ensure chaining capability by returning this: The biggest criticism of extending prototypes has always been name collision where the eventual specification implementation is different than the framework implementation. While I understand that argument, you can combat it with prefixing function names. Adding super powers to a native prototype so that every instance has it is so useful that I'd never tell someone not to extend a prototype. #MooToolsFTW.",
		timestamp: new Date('2022-12-19'),
		topic: Topic.JS,
	},
]

const App: React.FC = () => {
	return (
		<div className='App'>
			<UpperNavbar header={HEADER} />
			<TopicsNavbar items={Object.values(Topic)} />
			<PageContent posts={DUMMY_POSTS}></PageContent>
			<Footer />
		</div>
	)
}

export default App
