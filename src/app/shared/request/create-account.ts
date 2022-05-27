export class CreateAccount {

    public propostaDeFinanciamento: string;
    public termoAceite: boolean;
    public dueDate: number;

    constructor(propostaDeFinanciamento: string, termoAceite: boolean, dueDate: number) {
        this.propostaDeFinanciamento = propostaDeFinanciamento;
        this.termoAceite = termoAceite;
        this.dueDate = dueDate;
    }
}
