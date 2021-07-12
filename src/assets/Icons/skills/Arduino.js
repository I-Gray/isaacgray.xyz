import React from 'react';

const Arduino = ({size}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} preserveAspectRatio="xMidYMid" fill="#00979c"><path d="M27.275 40.518l-3.768 12.3h2.965l.68-2.292h3.676l.662 2.292h3.224l-3.768-12.3zm.622 7.534l1.12-3.825 1.107 3.825zm13.9-.845l-.136-.135.272-.113a3.08 3.08 0 0 0 .934-.655c.26-.27.472-.6.617-.973s.216-.794.216-1.26c0-.644-.116-1.2-.345-1.656a2.92 2.92 0 0 0-.994-1.127c-.415-.278-.92-.48-1.502-.598-.56-.113-1.188-.17-1.87-.17h-3.846v12.3h2.95v-4.806h.088a1.48 1.48 0 0 1 .822.217c.23.147.404.36.537.655l1.783 3.933h3.432L42.6 48.43c-.262-.533-.522-.933-.792-1.224zm-1.283-2.36c-.085.162-.204.296-.362.407a1.84 1.84 0 0 1-.616.267 3.6 3.6 0 0 1-.868.096h-.575v-2.6h.648c.675 0 1.177.106 1.5.315.274.182.407.5.407.94 0 .218-.04.402-.126.564zm12.884-2.867c-.497-.5-1.123-.873-1.862-1.1-.72-.232-1.567-.35-2.52-.35h-3.9v12.3h3.396c1.096 0 2.054-.15 2.85-.444.807-.298 1.48-.73 2.002-1.286s.9-1.23 1.153-2.012c.24-.764.36-1.624.36-2.555 0-1.015-.12-1.905-.36-2.646-.245-.76-.62-1.397-1.117-1.896zm-2.412 7.475c-.512.57-1.255.845-2.27.845h-.65v-7.262h.805c.57 0 1.046.08 1.418.24a1.99 1.99 0 0 1 .854.663c.218.3.376.676.47 1.117.098.467.15 1.008.15 1.608 0 1.28-.26 2.22-.776 2.8zm10.997-1.112c0 .424-.04.785-.117 1.074-.072.27-.18.5-.317.654s-.295.27-.496.34c-.218.078-.498.117-.83.117-.352 0-.643-.045-.864-.134a1.3 1.3 0 0 1-.522-.376 1.48 1.48 0 0 1-.297-.627 4.26 4.26 0 0 1-.097-.961v-7.913h-2.95v8.046c0 .665.082 1.275.244 1.814.17.56.446 1.043.826 1.437s.877.698 1.478.903c.584.2 1.3.303 2.097.303.722 0 1.385-.102 1.97-.303.597-.205 1.112-.515 1.53-.923s.743-.922.965-1.527c.218-.594.33-1.3.33-2.068v-7.682h-2.95v7.825m4.457-5.35h2.647v7.333H66.44v2.492h8.28v-2.492h-2.647v-7.333h2.647V40.52h-8.28v2.474m16.5 4.534l-3.297-7.008h-3.34v12.3h2.747v-7.142l3.315 7.142h3.322v-12.3H82.93v7.008m12.296-5.554c-.86-1.095-2.152-1.65-3.837-1.65-.72 0-1.408.128-2.043.38a4.51 4.51 0 0 0-1.692 1.182c-.48.53-.85 1.2-1.12 2.006-.265.796-.4 1.75-.4 2.836 0 2.007.427 3.568 1.27 4.64.86 1.098 2.152 1.655 3.837 1.655a5.52 5.52 0 0 0 2.044-.38c.644-.256 1.213-.653 1.7-1.182s.85-1.2 1.12-2.006c.264-.795.4-1.75.4-2.836 0-2.012-.427-3.576-1.27-4.646zm-1.94 6.4c-.084.454-.216.837-.392 1.138-.167.287-.373.497-.63.642s-.575.218-.948.218c-.737 0-1.25-.274-1.57-.84-.35-.62-.53-1.596-.53-2.904 0-.614.044-1.165.132-1.638.084-.453.217-.835.395-1.136a1.71 1.71 0 0 1 .632-.644c.252-.144.57-.217.942-.217.743 0 1.258.274 1.575.837.35.62.526 1.598.526 2.905 0 .616-.044 1.167-.132 1.638zm-19.1-12.994c-3.843 0-7.13-1.296-10.02-3.946-1.786-1.637-3.26-3.642-4.614-5.727-1.355 2.085-2.828 4.1-4.614 5.727-3.107 2.848-6.67 4.132-10.9 3.925-8.046-.035-14.58-6.385-14.58-14.185 0-7.822 6.57-14.185 14.648-14.185 4.42 0 8.14 1.463 11.375 4.47 1.554 1.445 2.865 3.122 4.06 4.876 1.196-1.754 2.508-3.43 4.06-4.876 3.234-3 6.955-4.47 11.375-4.47 8.077 0 14.648 6.363 14.648 14.185 0 7.8-6.535 14.15-14.58 14.185-.292.014-.582.02-.868.02zM62.493 20.973c1.603 2.6 3.16 5.022 5.054 6.758 2.14 1.96 4.394 2.767 7.3 2.613l.13-.004c5.316 0 9.64-4.117 9.64-9.178s-4.325-9.178-9.64-9.178c-3.138 0-5.67.995-7.965 3.13-1.715 1.595-3.13 3.64-4.53 5.86zm-18.38-9c-5.316 0-9.64 4.118-9.64 9.178s4.325 9.178 9.64 9.178l.13.004c2.915.154 5.17-.652 7.308-2.613 1.895-1.737 3.45-4.157 5.054-6.758-1.398-2.22-2.814-4.264-4.528-5.86-2.296-2.136-4.827-3.13-7.965-3.13z"/><path d="M75.65 19.343v-2.715h-2.826v2.715H70.1v2.812h2.715V24.9h2.826v-2.735h2.715v-2.812H75.65m-35.6-.043h8.923v2.9H40.05z"/>
	</svg>
);

export default Arduino;