/**
 * Created by chenchunyong on 12/17/15.
 */
'use strict';

import React,{View,WebView,Text}  from 'react-native';
const IFT = `(function($){JsBarcode=function(image,content,options,validFunction){var merge=function(m1,m2){var newMerge={};for(var k in m1){newMerge[k]=m1[k]}for(var k in m2){newMerge[k]=m2[k]}return newMerge};var validFunctionIfExist=function(valid){if(validFunction){validFunction(valid)}};options=merge(JsBarcode.defaults,options);var canvas=image;if(window.jQuery&&canvas instanceof jQuery){canvas=image.get(0)}if(!(canvas instanceof HTMLCanvasElement)){canvas=document.createElement("canvas")}if(!canvas.getContext){return image}var encoder=new window[options.format](content);if(!encoder.valid()){validFunctionIfExist(false);return this}var binary=encoder.encoded();var _drawBarcodeText=function(text){var x,y;y=options.height;ctx.font=options.fontOptions+" "+options.fontSize+"px "+options.font;ctx.textBaseline="bottom";ctx.textBaseline="top";if(options.textAlign=="left"){x=options.quite;ctx.textAlign="left"}else{if(options.textAlign=="right"){x=canvas.width-options.quite;ctx.textAlign="right"}else{x=canvas.width/2;ctx.textAlign="center"}}ctx.fillText(text,x,y)};var ctx=canvas.getContext("2d");canvas.width=binary.length*options.width+2*options.quite;canvas.height=options.height+(options.displayValue?options.fontSize*1.3:0);ctx.clearRect(0,0,canvas.width,canvas.height);if(options.backgroundColor){ctx.fillStyle=options.backgroundColor;ctx.fillRect(0,0,canvas.width,canvas.height)}ctx.fillStyle=options.lineColor;for(var i=0;i<binary.length;i++){var x=i*options.width+options.quite;if(binary[i]=="1"){ctx.fillRect(x,0,options.width,options.height)}}if(options.displayValue){_drawBarcodeText(content)}uri=canvas.toDataURL("image/png");if(window.jQuery&&image instanceof jQuery){if(!(image.get(0) instanceof HTMLCanvasElement)){image.attr("src",uri)}}else{if(!(image instanceof HTMLCanvasElement)){image.setAttribute("src",uri)}}validFunctionIfExist(true)};JsBarcode.defaults={width:2,height:100,quite:10,format:"CODE128",displayValue:false,fontOptions:"",font:"monospace",textAlign:"center",fontSize:12,backgroundColor:"",lineColor:"#000"};if(window.jQuery){$.fn.JsBarcode=function(content,options,validFunction){JsBarcode(this,content,options,validFunction);return this}}})(window.jQuery);function ITF(ITFNumber){this.ITFNumber=ITFNumber+"";this.valid=function(){return valid(this.ITFNumber)};this.encoded=function(){if(valid(this.ITFNumber)){return encode(this.ITFNumber)}return""};var digitStructure={"0":"00110","1":"10001","2":"01001","3":"11000","4":"00101","5":"10100","6":"01100","7":"00011","8":"10010","9":"01010"};var startBin="1010";var endBin="11101";var regexp=/^([0-9][0-9])+$/;function encode(number){var result="";result+=startBin;for(var i=0;i<number.length;i+=2){result+=calculatePair(number.substr(i,2))}result+=endBin;return result}function calculatePair(twoNumbers){var result="";var number1Struct=digitStructure[twoNumbers[0]];var number2Struct=digitStructure[twoNumbers[1]];for(var i=0;i<5;i++){result+=(number1Struct[i]=="1")?"111":"1";result+=(number2Struct[i]=="1")?"000":"0"}return result}function valid(number){return number.search(regexp)!==-1}};`;
const CODE128 = `function CODE128(r,n){function t(){return-1==r.search(d)?!1:!0}function e(r,n,t,e){var o="";return o+=C(t),o+=n(r),o+=C(e(r,t)),o+=g}function o(r){for(var n="",t=0;t<r.length;t++)n+=h(r[t]);return n}function i(r){for(var n="",t=0;t<r.length;t+=2)n+=C(parseInt(r.substr(t,2)));return n}function f(r,n){for(var t=0,e=0;e<r.length;e++)t+=a(r[e])*(e+1);return(t+n)%103}function u(r,n){for(var t=0,e=1,o=0;o<r.length;o+=2)t+=parseInt(r.substr(o,2))*e,e++;return(t+n)%103}function C(r){for(var n=0;n<c.length;n++)if(c[n][2]==r)return c[n][1];return""}function a(r){for(var n=0;n<c.length;n++)if(c[n][0]==r)return c[n][2];return 0}function h(r){for(var n=0;n<c.length;n++)if(c[n][0]==r)return c[n][1];return""}n=n||"B",this.string128=r+"",this.valid=t,this.getText=function(){return this.string128},this.encoded=function(){return t(r)?s["code128"+n](r):""};var c=[[" ","11011001100",0],["!","11001101100",1],['"',"11001100110",2],["#","10010011000",3],["$","10010001100",4],["%","10001001100",5],["&","10011001000",6],["'","10011000100",7],["(","10001100100",8],[")","11001001000",9],["*","11001000100",10],["+","11000100100",11],[",","10110011100",12],["-","10011011100",13],[".","10011001110",14],["/","10111001100",15],["0","10011101100",16],["1","10011100110",17],["2","11001110010",18],["3","11001011100",19],["4","11001001110",20],["5","11011100100",21],["6","11001110100",22],["7","11101101110",23],["8","11101001100",24],["9","11100101100",25],[":","11100100110",26],[";","11101100100",27],["<","11100110100",28],["=","11100110010",29],[">","11011011000",30],["?","11011000110",31],["@","11000110110",32],["A","10100011000",33],["B","10001011000",34],["C","10001000110",35],["D","10110001000",36],["E","10001101000",37],["F","10001100010",38],["G","11010001000",39],["H","11000101000",40],["I","11000100010",41],["J","10110111000",42],["K","10110001110",43],["L","10001101110",44],["M","10111011000",45],["N","10111000110",46],["O","10001110110",47],["P","11101110110",48],["Q","11010001110",49],["R","11000101110",50],["S","11011101000",51],["T","11011100010",52],["U","11011101110",53],["V","11101011000",54],["W","11101000110",55],["X","11100010110",56],["Y","11101101000",57],["Z","11101100010",58],["[","11100011010",59],["]","11001000010",61],["^","11110001010",62],["_","10100110000",63],["a","10010110000",65],["b","10010000110",66],["c","10000101100",67],["d","10000100110",68],["e","10110010000",69],["f","10110000100",70],["g","10011010000",71],["h","10011000010",72],["i","10000110100",73],["j","10000110010",74],["k","11000010010",75],["l","11001010000",76],["m","11110111010",77],["n","11000010100",78],["o","10001111010",79],["p","10100111100",80],["q","10010111100",81],["r","10010011110",82],["s","10111100100",83],["t","10011110100",84],["u","10011110010",85],["v","11110100100",86],["w","11110010100",87],["x","11110010010",88],["y","11011011110",89],["z","11011110110",90],["{","11110110110",91],["|","10101111000",92],["}","10100011110",93],["~","10001011110",94],[String.fromCharCode(127),"10111101000",95],[String.fromCharCode(128),"10111100010",96],[String.fromCharCode(129),"11110101000",97],[String.fromCharCode(130),"11110100010",98],[String.fromCharCode(131),"10111011110",99],[String.fromCharCode(132),"10111101110",100],[String.fromCharCode(133),"11101011110",101],[String.fromCharCode(134),"11110101110",102],[String.fromCharCode(135),"11010000100",103],[String.fromCharCode(136),"11010010000",104],[String.fromCharCode(137),"11010011100",105]],g="1100011101011",d=/^[!-~ ]+$/,s={code128B:function(r){return e(r,o,104,f)},code128C:function(r){return r=r.replace(/ /g,""),e(r,i,105,u)}}}function CODE128B(r){return new CODE128(r,"B")}function CODE128C(r){return new CODE128(r,"C")}`
export default React.createClass({
    render() {
        return (
            <View style={{width:this.props.width,height:this.props.height}}>
                <WebView
                    html={this._getHtml()}/>
            </View>
        )
    },
    _getHtml() {
        let html = `<!doctype html>
                    <html>
                    <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                   <body style="height: 100%;width: 100%;margin: 0;padding: 0;overflow: hidden">
                    <canvas height="${this.props.height}" width="${this.props.width}"></canvas><script>
             ${IFT}
             ${CODE128}
             var PIXEL_RATIO = (function () {
                var ctx = document.createElement("canvas").getContext("2d"),
                dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;

                return dpr / bsr;
            })();
             var canvas = document.querySelector('canvas');
             var oldWidth=canvas.width;
             var oldHeight=canvas.height;
             canvas.width=oldWidth*PIXEL_RATIO;
             canvas.height=oldHeight*PIXEL_RATIO;
             canvas.style.width=oldWidth+'px';
             canvas.style.height=oldHeight+'px';
             canvas.ontouchstart=function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
             }
            JsBarcode(canvas, "${this.props.value}",{ format: "${this.props.format}",
             displayValue: true,  fontSize: 28, backgroundColor:'${this.props.bgColor}'});
             </script>
             </body>
             </html>`;
        return html;
    }
});
