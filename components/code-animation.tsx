"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const codeSnippets = [
  {
    language: "JavaScript",
    code: `function optimizePerformance(code) {
  const start = performance.now();
  const result = processData(code);
  const end = performance.now();
  
  console.log(\`Execution time: \${end - start}ms\`);
  return result;
}`,
  },
  {
    language: "Python",
    code: `def analyze_data(dataset):
    import numpy as np
    
    # Process the input data
    results = np.array(dataset)
    mean_val = np.mean(results)
    
    return {
        "mean": mean_val,
        "median": np.median(results),
        "std_dev": np.std(results)
    }`,
  },
  {
    language: "TypeScript",
    code: `interface Project {
  id: string;
  name: string;
  technologies: string[];
  completed: boolean;
}

export const sortProjects = (
  projects: Project[]
): Project[] => {
  return projects
    .filter(p => p.completed)
    .sort((a, b) => a.name.localeCompare(b.name));
};`,
  },
]

export default function CodeAnimation() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cursorPosition, setCursorPosition] = useState(0)
  const codeRef = useRef<HTMLPreElement>(null)

  const currentSnippet = codeSnippets[currentSnippetIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (cursorPosition < currentSnippet.code.length) {
        timeout = setTimeout(
          () => {
            setDisplayedCode(currentSnippet.code.substring(0, cursorPosition + 1))
            setCursorPosition((prev) => prev + 1)
          },
          30 + Math.random() * 50,
        ) // Random typing speed for realism
      } else {
        setIsTyping(false)
        timeout = setTimeout(() => {
          // Pause at the end of typing before erasing
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCursorPosition(0)
            setCurrentSnippetIndex((currentSnippetIndex + 1) % codeSnippets.length)
          }, 3000)
        }, 2000)
      }
    }

    return () => clearTimeout(timeout)
  }, [cursorPosition, isTyping, currentSnippet.code, currentSnippetIndex])

  // Function to highlight code syntax
  const highlightCode = (code: string) => {
    // This is a simplified syntax highlighting
    // In a real implementation, you might want to use a library like Prism.js
    return code
      .replace(
        /(function|const|let|var|return|import|export|interface|if|else|for|while|class|extends|implements|new|this|typeof|instanceof|null|undefined|true|false|try|catch|finally|throw|async|await|from|of|in|as|default)/g,
        '<span class="text-purple-400">$1</span>',
      )
      .replace(/(["'`].*?["'`])/g, '<span class="text-green-400">$1</span>')
      .replace(/($$|$$|\{|\}|\[|\]|;|,|\.)/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(\b\d+\b)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(#.*)/g, '<span class="text-gray-500">$1</span>')
      .replace(
        /(\bconsole\b)\.(\blog\b)/g,
        '<span class="text-yellow-500">$1</span>.<span class="text-blue-400">$2</span>',
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-blue-800/30"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-mono text-gray-400">{currentSnippet.language}</div>
        <div className="text-sm font-mono text-gray-500">taylor_foster.code</div>
      </div>
      <div className="p-4 font-mono text-sm overflow-x-auto">
        <pre
          ref={codeRef}
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html:
              highlightCode(displayedCode) +
              (isTyping ? '<span class="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5"></span>' : ""),
          }}
        />
      </div>
      <div className="px-4 py-2 bg-gray-800/80 border-t border-gray-700 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Line: {displayedCode.split("\n").length}, Column: {cursorPosition}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-500">UTF-8</div>
          <div className="text-xs text-gray-500">LF</div>
        </div>
      </div>
    </motion.div>
  )
}