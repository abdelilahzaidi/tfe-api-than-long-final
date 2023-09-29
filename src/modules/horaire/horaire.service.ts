import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHoraireDto } from 'src/commun/dto/horaire/create-horaire.dto';
import { HoraireEntity } from 'src/commun/entities/horaire/horaire';
import { Repository } from 'typeorm';

@Injectable()
export class HoraireService {

  constructor(
    @InjectRepository(HoraireEntity)
    private readonly horaireRepository: Repository<HoraireEntity>,
  ) {}

  async all(): Promise<HoraireEntity[]> {
    return await this.horaireRepository.find();
  }

  async createLieu(dto: CreateHoraireDto): Promise<HoraireEntity> {
    try {
      const horaire = new HoraireEntity();
      horaire.heureDebut = dto.heureDebut;
      horaire.heureFin = dto.heureFin;
      if (horaire.heureDebut > horaire.heureFin) {
        throw new HttpException('Heure debut ', 400);
      }
      horaire.jour = dto.jour;

      const savedHoraire = await this.horaireRepository.save(horaire);

      console.log('in service', savedHoraire);
      return savedHoraire;
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        "Une erreur est survenue lors de la creation de l'horaire.",
      );
    }
  }

  async findHoraireById(id: number): Promise<HoraireEntity | undefined> {
    return this.horaireRepository.findOne({ where: { id } });
  }

}
