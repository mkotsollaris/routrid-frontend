import $ from 'jquery';
import { mermaidAPI } from 'mermaid';
import { useEffect } from 'react';

export default () => {
    let counter=0;
    function visualize() {
        console.log('@visualize')
        $(function () {
            const input = document.getElementById("input");
            const output = document.getElementById("output");
            console.log('output',output)
            mermaidAPI.render(`theGraph`, input.value, function (svgCode) {
                output.innerHTML = svgCode;
            });
        });
    }
    
    useEffect(() => {
        // mermaidAPI.initialize({
        //     startOnLoad: false
        // });
        // $(function () {
        //     const input = document.getElementById("input");
        //     const output = document.getElementById("output");
        //     console.log('output',output)
        //     mermaidAPI.render('theGraph', input.value, function (svgCode) {
        //         output.innerHTML = svgCode;
        //     });
        // });
    }, []);

    return (
        <div>
            <textarea name="" id="input" cols="30" rows="10">
            graph LR;
            A-->B;
</textarea>
<button onClick={() => visualize()}>Visualize</button>

            <div id="output"></div>
        </div>
    );
};