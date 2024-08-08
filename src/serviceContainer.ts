export default class ServiceContainer {
    /**
     * @description Registered services in the container.
     * @type {Map<string, any>}
     */
    private readonly services: Map<string, any> = new Map<string, any>();

    /**
     * @description Add a service to the container.
     *
     * @param {string} name - The name of the service.
     * @param {any} service - The service to add.
     *
     * @returns {void}
     */
    public add(name: string, service: any): void {
        this.services.set(name, service);
    }

    /**
     * @description Get a service from the container.
     *
     * @param {string} name - The name of the service.
     *
     * @returns {any} - The service.
     */
    public get(name: string): any {
        return this.services.get(name);
    }

    /**
     * @description Make a new instance of a class.
     *
     * @param {string} className - The name of the class to make.
     *
     * @returns {any} - The new instance of the class.
     */
    public make(className: any): any {
        const instance = new className();
        if (instance.resolveDependencies) {
            instance.resolveDependencies(this);
        }
        return instance;
    }
}