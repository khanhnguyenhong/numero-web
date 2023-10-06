import { Component, OnInit } from '@angular/core';
import { AiService } from '../shared/services/ai-service';

@Component({
  selector: 'app-dummy-ai',
  templateUrl: './dummy-ai.component.html',
  styleUrls: ['./dummy-ai.component.css'],
})
export class DummyAiComponent implements OnInit {
  data = '';
  content = '';

  constructor(private aiService: AiService) {}

  ngOnInit(): void {}

  generateData(): void {
    if (this.content === '') {
      return;
    }
    this.aiService.requestByContent(this.content).subscribe(res => {
      console.log({res});
      this.data = JSON.stringify(res);
    });
  }
}
