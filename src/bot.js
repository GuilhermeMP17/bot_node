const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('618131689:AAHZfHfbFHCNIMawY0Au5CZfDPTOf1tL720')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    oiCommand($) {
        $.sendMessage('Olá,Tudo bem? você já conhece o Guilherme M. Pereira?')
    }
    belezaCommand($) {
        $.sendMessage('Você já conhece o Guilherme M. Pereira?')
    }
    criadorCommand($) {
        $.sendMessage('Ele é meu criador, e para isso criou uma API em NodeJs, para que eu pudesse responder vocês aqui no telegram.')
    }
    startCommand($) {
        $.sendMessage('Meu nome é botNode, e eu fui criado para te responder quando meu criador estiver ocupado...')
    }
    nomeCommand($) {
        $.sendMessage('Meu nome é BotNode, eu nasci em  28/06/2018, eu fui escrito na linguagem NodeJs, e estou pronto pra te responder algumas perguntas.')
    }
    legalCommand($) {
        $.sendMessage('Muito, ele é um ótimo desenvolvedor e com seu conhecimento em nodeJS, me ajudou a te responder algumas perguntas...')
    }
    inteligenteCommand($) {
        $.sendMessage('Na verdade ele me ensinou a responder apenas algumas perguntas por enquanto, você pode perguntar meu nome, perguntar como fui criado ou sobre o meu criador.')
    }

    get routes() {
        return {
            'oiCommand': 'oiCommand',
            'criadorCommand': 'criadorCommand',
            'nomeCommand':'nomeCommand',
            'startCommand':'startCommand',
            'belezaCommand': 'belezaCommand',
            'legalCommand':'legalCommand',
            'inteligenteCommand':'inteligenteCommand'
        }
    }
}

tg.router
    .when(
        new TextCommand('Oi', 'oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Olá', 'oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Opah', 'oiCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Beleza', 'belezaCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Jóia', 'belezaCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Não', 'criadorCommand'),
        new PingController()
    )
    .when(
        new TextCommand('Sim', 'criadorCommand'),
        new PingController()
    )
    .when(
        new TextCommand('nome?', 'nomeCommand'),
        new PingController()
    )
    .when(
        new TextCommand('legal', 'legalCommand'),
        new PingController()
    )
    .when(
        new TextCommand('inteligente', 'inteligenteCommand'),
        new PingController()
    )
    .when(
        new TextCommand('/start', 'startCommand'),
        new PingController()
    )