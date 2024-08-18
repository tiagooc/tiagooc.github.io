document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = input.value.trim().toLowerCase();
            handleCommand(command);
            input.value = "";
        }
    });

    function handleCommand(command) {
        addOutputLine(`$ ${command}`);

        const response = getCommandResponse(command);
        if (response) {
            addOutputLine(response);
        }

        scrollToBottom();
    }

    function getCommandResponse(command) {
        switch (command) {
            case "help":
                return helpMessage();
            case "about":
                return aboutMessage();
            case "linkedin":
                return linkedinMessage();
            case "clear":
                output.innerHTML = "";
                return null;
            default:
                return `Command not found: ${command}<br>Type <strong>help</strong> for available commands`;
        }
    }

    function helpMessage() {
        return "Available commands:\n" +
            "<strong>about</strong>\n" +
            "<strong>linkedin</strong>";
    }

    function aboutMessage() {
        return "I’m a curious engineer who likes to learn new stuff.\n" +
            "These last few years I’ve been focusing on backend development while designing, developing and maintaining high throughput, scalable and resilient applications.\n" +
            "I’ve been working with C# and .NET, but I like to keep a “right tool for the job” mindset.\n" +
            "I’m currently based in Porto, Portugal.";
    }

    function linkedinMessage() {
        return createLink("https://www.linkedin.com/in/tiagooc/", "https://www.linkedin.com/in/tiagooc/");
    }

    function createLink(url, text) {
        return `<a target='_blank' href='${url}'>${text}</a>`;
    }

    function addOutputLine(content) {
        const responseLine = document.createElement("div");
        responseLine.innerHTML = content;
        output.appendChild(responseLine);
    }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }
});
